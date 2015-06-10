class VoxelHologramMarkdownRenderer < Redcarpet::Render::HTML
  def block_code(code, language)
    formatter = Rouge::Formatters::HTML.new(wrap: false)

    if language and language.include?('example')
      if language.include?('js')
        lexer = Rouge::Lexer.find('js')

        '</div> <!-- /.voxel-hologram__content -->' +

        '<script>' + code + '</script>' +

        '<div class="codeBlock jsExample">' +
          '<div class="highlight">' +
            '<pre>' + formatter.format(lexer.lex(code)) + '</pre>' +
          '</div>' +
        '</div>' +

        '<div class="voxel-hologram__content">'
      elsif language.include?('none')
        lexer = Rouge::Lexer.find('none')

        '</div> <!-- /.voxel-hologram__content -->' +

        '<div class="container-fluid">' +
          '<div class="col-sm-12">' +
            render_html(code, language) +
          '</div>' +
        '</div>' +

        '<div class="voxel-hologram__content">'
      else
        lexer = Rouge::Lexer.find(get_lexer(language))

        '</div> <!-- /.voxel-hologram__content -->' +

        '<div class="codeExample">' +
          '<div class="exampleOutput">' +
            render_html(code, language) +
          '</div>' +

          '<div class="codeBlock">' +
            '<div class="highlight">' +
              '<pre>' + formatter.format(lexer.lex(code)) + '</pre>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="voxel-hologram__content">'
      end
    else
      lexer = Rouge::Lexer.find_fancy('guess', code)

      '</div> <!-- /.voxel-hologram__content -->' +

      '<div class="codeBlock">' +
        '<div class="highlight">' +
          '<pre>' + formatter.format(lexer.lex(code)) + '</pre>' +
        '</div>' +
      '</div>' +

      '<div class="voxel-hologram__content">'
    end
  end

  private
  def render_html(code, language)
    case language
      when 'haml_example'
        safe_require('haml', language)
        return Haml::Engine.new(code.strip).render(template_rendering_scope, {})
      else
        code
    end
  end

  def template_rendering_scope
    Object.new
  end

  def get_lexer(language)
    case language
      when 'haml_example'
        'haml'
      else
        'html'
    end
  end

  def safe_require(templating_library, language)
    begin
      require templating_library
    rescue LoadError
      raise "#{templating_library} must be present for you to use #{language}"
    end
  end
end
