#!/bin/bash
set -e

echo "🚀 Building Notely production app..."

# Ensure we’re in the project root
cd "$(dirname "$0")/.."

# Install clean dependencies
npm ci

# Build TypeScript → JavaScript
npm run build

echo "✅ Build complete! Output is in the dist/ directory"
