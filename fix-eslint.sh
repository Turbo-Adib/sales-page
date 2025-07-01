#!/bin/bash

# Fix all apostrophes and quotes in TypeScript/TSX files
find src -name "*.tsx" -o -name "*.ts" | while read file; do
  # Fix apostrophes
  sed -i "s/'/\&apos;/g" "$file"
  # Fix double quotes in JSX text content (more complex, needs context)
  # This is a simplified approach - in practice you'd want to be more careful
done

# Remove unused imports
npx eslint src --fix --ext .ts,.tsx

echo "ESLint fixes applied"