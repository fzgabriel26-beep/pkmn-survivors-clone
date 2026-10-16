#!/usr/bin/env bash
# Compila el juego y lo publica en GitHub Pages.
#
#   ./tools/deploy.sh "Qué has cambiado"
#
# Hace: build (sin SEO) -> commit -> push. GitHub Pages se actualiza solo en 1-2 min.
set -e
cd "$(dirname "$0")/.."

MSG="${1:-Actualizar juego}"

echo "== 1/3 Compilando (node tools/build.js --sin-seo) =="
node tools/build.js --sin-seo

echo "== 2/3 Commit =="
git add -A
if git diff --cached --quiet; then
  echo "  (no hay cambios que commitear)"
else
  git commit -m "$MSG"
fi

echo "== 3/3 Push =="
git push

echo
echo "Listo: https://fzgabriel26-beep.github.io/pkmn-survivors-clone/"
