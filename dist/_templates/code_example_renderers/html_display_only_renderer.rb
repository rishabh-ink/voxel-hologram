Hologram::CodeExampleRenderer::Factory.define "html_display_only" do
  example_template "markup_display_only_example_template"

  lexer { Rouge::Lexer.find("html") }
end
