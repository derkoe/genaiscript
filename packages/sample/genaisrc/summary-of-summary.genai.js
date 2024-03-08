script({
    title: "summary of summary",
})

// summarize each files individually
for (const file of env.files) {
    const { text } = await runPrompt(
        () => {
            def("FILE", file)
            $`Summarize the FILE. Be consice.`
        },
        { model: "gpt-3.5-turbo" }
    )
    def("FILE", { ...file, content: text })
}
// use summary
$`Summarize all the FILE.`
