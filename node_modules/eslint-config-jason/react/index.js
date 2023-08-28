let base = ['../base'].map(require.resolve)

module.exports = {
  extends: base.concat(['plugin:import/react']),
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
  },
}
