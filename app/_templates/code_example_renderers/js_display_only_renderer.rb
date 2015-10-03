Hologram::CodeExampleRenderer::Factory.define "js_display_only" do
  example_template "js_display_only_example_template"

  lexer { Rouge::Lexer.find("js") }
end
