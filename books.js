《how browsers work》
*Components: 
*User Interface
*Browser engine
*Rendering engine
	1、Parser 
		Parsing - general
		Parser:				Document -> Lexical Analysis -> Syntax Analysis -> Parse Tree
		Translation:		Source Code -> Parsing -> Parse Tree ->Translation -> Machine Code
		
		HTML Parser
		parsing:			Network -> Tokenizer -> Tree Construction -> DOM
		tokenization:		Data State -> Tag open state -> Tag name state... -> End tag token -> 
							Tag name state ... -> Data State
		tree construction: 	initial mode -> before HTML -> before head -> in head -> after head ->
							in body -> after body -> after after body
	2、DOM tree -> Render tree -> Layout -> paint
	gradual process
	
	
*Networking、
*Javascript Interpreter
*UI Backend、Data Storage