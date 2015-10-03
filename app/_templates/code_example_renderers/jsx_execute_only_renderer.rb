require "babel/transpiler"

Hologram::CodeExampleRenderer::Factory.define "jsx_execute_only" do
  example_template "jsx_execute_only_example_template"

  lexer { Rouge::Lexer.find("js") }

  rendered_example do |code|
    Babel::Transpiler.transform(code.strip)["code"]
  end
end
