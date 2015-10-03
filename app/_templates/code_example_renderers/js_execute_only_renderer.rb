Hologram::CodeExampleRenderer::Factory.define "js_execute_only" do
  example_template "js_execute_only_example_template"

  lexer { Rouge::Lexer.find("js") }
end
