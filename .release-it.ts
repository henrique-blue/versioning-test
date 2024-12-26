import type { Config } from 'release-it'

export default {
  git: {
    pushRepo: 'https://github.com/henrique-blue/versioning-test.git',
    commit: true,
    tag: true,
    push: true,
    commitMessage: 'chore: release v${version}',
    tagName: 'v${version}'
  },
  github: {
    release: true,
    releaseName: 'v${version}'
  },
  npm: {
    publish: false
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: {
        name: 'conventionalcommits',
        types: [
          {
            type: 'feat',
            section: 'Features'
          },
          {
            type: 'fix',
            section: 'Bug Fixes'
          },
          {}
        ]
      }
    }
  }
} satisfies Config
