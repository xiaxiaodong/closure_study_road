##Google Closure 学习笔记
    
    意外找到一份中文文档 http://wenku.baidu.com/view/cd5299402f60ddccda38a062.html?re=view
    
#命名空间 Namespace
    
    goog.provide()  
        写在文件第一行 代表本文件的命名空间
        
        demo:
            goog.provide('tutorial.notepad.Note');
        
        等同于
            tutorial = tutorial || {};
            tutorial.notepad = tutorial.notepad || {};
            tutorial.notepad.Note = tutorial.notepad.Note || {};
        
    goog.require()
        在文件头部,代表需要引入的命名空间
        
        goog.require('goog.dom')
        
        实际发生:
            下载deps.js 这个脚本包含了各个组件的依赖关系
            然后会下载对应的脚本并执行
        
#继承 Inheritance 
    
    继承另一个组件,并在父级组件上做适当修改,属于函数式继承(根据父级构造函数修改实例后,再添加或修改)
    
    goog.inherits(子级, 父级);
    
    demo:
        goog.ui.MenuButton = function(content, opt_menu, opt_renderer, opt_domHelper) {
            //实际的函数继承
            goog.ui.Button.call(this, content, opt_renderer ||
              goog.ui.MenuButtonRenderer.getInstance(), opt_domHelper);
            ...
        };
        //说明打包关系
        goog.inherits(goog.ui.MenuButton, goog.ui.Button);

##组件库学习

    不得不说
        这个库的构建思想和代码编写不得不说是很棒的,代码生成后很舒坦,压缩也很彻底
        但不得不说,这个库的组件没有区分基础和插件,对学习造成了不少的困难,没有中文文档
    
    官网api地址 https://google.github.io/closure-library/api/
    官网demo地址 https://google.github.io/closure-library/source/closure/goog/demos/
    
#事件 Events
    
    可以监听dom,也可以监听组件
    
    goog.events.listen( dom 或 组件实例 , 事件类型,
            处理函数, false, this);
    
    监听DOM demo:
        goog.events.listen(this.elHeader_, goog.events.EventType.CLICK,
            this.onHeaderClick_, false, this);
            
    监听组件 demo:
        var zippyHeader = document.getElementById('header');
        var zippyContent = document.getElementById('content');
        var zippy = new goog.ui.Zippy(zippyHeader, zippyContent);

        function react(e) {
            alert('The Zippy opened!');
        }
        goog.events.listen(zippy, goog.ui.Zippy.Events.TOGGLE, react);
        
#



##Google Closure Library  项目构建说明
    
    建议观看官网完整教程 https://developers.google.com/closure/library/

#命令行
    路径在git下载的最顶层目录,与Closure Library项目文件夹同级
    
    运行构件化需要 python 2.7 和java的环境,请自行安装
    
    myproject 是项目名称,也是文件夹名称
    
    实例命令行
    closure-library/closure/bin/build/closurebuilder.py \
      --root=closure-library/ \
      --root=myproject/ \
      --namespace="myproject.start" \
      --output_mode=compiled \
      --compiler_jar=compiler.jar \
      --compiler_flags="--js=deps.js" \
      --compiler_flags="--compilation_level=SIMPLE_OPTIMIZATIONS" \
      > my-compiled.js
      
    
    第一行命令是启动 closurebuilder 这个文件,这个文件是启动文件
        下方为参数
            root 扫描js的根目录
            namespace 是脚本中导出的函数的名称
            output_mode 有两种模式 
                        debug   不会压缩文件,html的script需要指向base.js
                        compiled 会将文件和所需的模块压缩为一个脚本
            compiler_jar 压缩时,使用的是java的压缩包
            
            compiler_flags 解析时的标志
                js  deps.js的位置
                compilation_level  
                    WHITESPACE_ONLY         仅仅去掉空格和换行  --未测试过,发现于百度文库的中文文档
                    SIMPLE_OPTIMIZATIONS    只是简单压缩
                    ADVANCED_OPTIMIZATIONS  更进一步的压缩,如果函数未被使用,会被删除掉  
                                            出bug了查看这个网页 https://developers.google.com/closure/compiler/docs/api-tutorial3
            >  输出的脚本路径和名称
    
    若写成bat文件需要写成单行
        python closure-library/closure/bin/build/closurebuilder.py  --root=closure-library/  --root=myproject/  --namespace="myproject.start"  --output_mode=compiled  --compiler_jar=compiler.jar --compiler_flags="--js=deps.js" --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS"  > myproject/myproject.js
        pause
            
#编写 deps.js 文件
    deps文件是文件的对应关系,说明每一个文件的命名空间和依赖的包
    
    
    goog.addDependency('相对于deps的js文件路径', ['本文件的命名空间'], ['本文件依赖的命名空间']);
    demo:
        goog.addDependency('dom/forms.js', ['goog.dom.forms'], ['goog.structs.Map']);
        
    
    借助 depswriter.py 这个脚本,来创建自己的命名空间
        
        losure-library/closure/bin/build/depswriter.py  \
            --root=closure-library/ \
            --root=myproject/ \
            --output_file='deps.js'
            
        执行脚本后,会在当前路径下生产新的deps.js
    
    若写成bat文件需要写成单行
            python closure-library/closure/bin/build/depswriter.py   --root=closure-library/ --root=myproject/ --output_file=deps.js
    