《how browsers work》
*Components: 
*User Interface
*Browser engine
*Rendering engine
	1、Parser -> DOM tree
		Parsing - general
		Parser:				Document -> Lexical Analysis -> Syntax Analysis -> Parse Tree
		Translation:		Source Code -> Parsing -> Parse Tree ->Translation -> Machine Code
		
		HTML Parser
			parsing:			Network -> Tokenizer -> Tree Construction -> DOM
			tokenization:		Data State -> Tag open state -> Tag name state... -> End tag token -> 
								Tag name state ... -> Data State
			tree construction: 	initial mode -> before HTML -> before head -> in head -> after head ->
							in body -> after body -> after after body
							
		CSS parsing			//context free grammar
			Webkit CSS parser
			StyleSheet object - > CSS rules -> selector,declaration
			
			
		Parsing scripts
			order	
				Scripts		synchronous		//no defer and no mark thread
				Speculative parsing			main/thread parses		//scripts, style sheets and images
				Style sheets				//The script does not affect the style
				
				
				
	2、 -> Render tree 
		RenderObject				//create a instance with attributes
		render tree relation to the DOM tree
		attachment				//"attach" method
		Style Computation
	
	3、 -> Layout -> paint
	gradual process
	
	
*Networking
*Javascript Interpreter
*UI Backend、Data Storage