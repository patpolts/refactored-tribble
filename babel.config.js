module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                "@entities": "./src/entities",
                "@providers": "./src/providers",
                "@repositories": "./src/repositories",
                "@config": "./src/config",
                "@strategies": "./src/strategies",
                "@enviroments": "./src/enviroments"
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts',
        '**/*.test.ts',
        'documentation/**/*',
        'src/tests/**/*',
    ]
}