#!/bin/sh
set -e

REPO_URL="${GITHUB_REPO_URL:-https://github.com/winoiknow/www-anteon-group}"
BRANCH="${GITHUB_BRANCH:-main}"
INTERVAL="${CHECK_INTERVAL:-900}"
WORK_DIR="/tmp/repo"
WWW_DIR="/var/www/html"

log() {
  echo "[updater $(date '+%H:%M:%S')] $1"
}

build_and_deploy() {
  log "Installing dependencies..."
  cd "$WORK_DIR"
  npm install --legacy-peer-deps --silent

  log "Building..."
  npm run build

  log "Deploying to $WWW_DIR..."
  # Atomic swap: write to staging dir, then move
  rm -rf /tmp/dist-staging
  cp -r dist /tmp/dist-staging
  rm -rf "$WWW_DIR"/*
  cp -r /tmp/dist-staging/. "$WWW_DIR/"
  rm -rf /tmp/dist-staging

  log "Deploy complete."
}

# Initial clone
if [ ! -d "$WORK_DIR/.git" ]; then
  log "Cloning $REPO_URL (branch: $BRANCH)..."
  git clone --depth=1 --branch "$BRANCH" "$REPO_URL" "$WORK_DIR"
  build_and_deploy
else
  cd "$WORK_DIR"
  log "Repo already present, checking for updates..."
  git fetch origin "$BRANCH" --depth=1
  LOCAL=$(git rev-parse HEAD)
  REMOTE=$(git rev-parse "origin/$BRANCH")
  if [ "$LOCAL" != "$REMOTE" ]; then
    log "Updates found ($LOCAL -> $REMOTE), rebuilding..."
    git reset --hard "origin/$BRANCH"
    build_and_deploy
  else
    log "Already up to date."
  fi
fi

# Poll loop
while true; do
  log "Sleeping ${INTERVAL}s until next check..."
  sleep "$INTERVAL"
  log "Checking for updates..."
  cd "$WORK_DIR"
  git fetch origin "$BRANCH" --depth=1
  LOCAL=$(git rev-parse HEAD)
  REMOTE=$(git rev-parse "origin/$BRANCH")
  if [ "$LOCAL" != "$REMOTE" ]; then
    log "Updates found, rebuilding..."
    git reset --hard "origin/$BRANCH"
    build_and_deploy
  else
    log "No changes."
  fi
done
