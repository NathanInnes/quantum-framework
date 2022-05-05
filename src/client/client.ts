export function helloWorld() {
    RegisterCommand(
        'helloWorld',
        async () => {
            console.log('Hello world from client.');
        },
        false
    )
}
