import path from "path";
import transformAndWriteToFile from "../index";

test("can transformAndWriteToFile", () => {
  const smallMarkdownBody = `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
`;

  return transformAndWriteToFile({
    frontmatterMarkdown: {
      frontmatter: [
        { key: "content" },
        { anotherKey: ["arrayValue1", "arrayValue2"] },
        { anObject: { whatever: true, wuk: new Error('something') } }
      ],
      body: smallMarkdownBody
    },
    path: path.join(__dirname, "snapshots"),
    fileName: "test.md"
  });
});
