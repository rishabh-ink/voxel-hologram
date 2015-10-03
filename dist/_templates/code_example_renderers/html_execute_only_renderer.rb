Hologram::CodeExampleRenderer::Factory.define "html_execute_only" do
  example_template "markup_execute_only_example_template"

  lexer { Rouge::Lexer.find("html") }
end
