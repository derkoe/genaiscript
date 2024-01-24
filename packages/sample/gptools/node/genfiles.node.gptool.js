gptool({
    title: "Generate Node.js Code (multifile)",
    system: ["system.code"],
    temperature: 0.01,
    categories: ["code.js.node"],
})

$`You are an expert system designer that writes node.js code.`

$`Generate code for all files mentioned in SPECS below.`

def("SPECS", env.spec)

$`Generate plain node.js ESM syntax, do not generate markdown.`
