type ASTNode = import('eslint').Rule.Node;
type Node = import('eslint').Rule.Node;
type Expression = import('estree').Expression;
type Identifier = Extract<ASTNode, { type: 'Identifier' }>;
type TemplateLiteral = Extract<ASTNode, { type: 'TemplateLiteral' }>;
type ClassDeclaration = Extract<ASTNode, { type: 'ClassDeclaration' }>;

type RuleContext = import('eslint').Rule.RuleContext;
type RuleListener = import('eslint').Rule.RuleListener;
type RuleModule = import('eslint').Rule.RuleModule;
type Scope = import('eslint').Scope.Scope;
type Reference = import('eslint').Scope.Reference;
type SourceCode = import('eslint').SourceCode;

type ImportTarget = import("./lib/util/import-target");
