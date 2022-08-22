name: Apertium Monolingual CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  call-workflow:
    uses: apertium/github-actions/.github/workflows/monolingual-build.yml@master
