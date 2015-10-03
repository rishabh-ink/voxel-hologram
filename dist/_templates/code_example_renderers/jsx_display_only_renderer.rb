Hologram::CodeExampleRenderer::Factory.define "jsx_display_only" do
  example_template "jsx_display_only_example_template"

  lexer { Rouge::Lexer.find("html") }
end
