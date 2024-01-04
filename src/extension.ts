// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "codeassistgpt" is now active!');

	// The command has been defined in the package.json file
	context.subscriptions.push(
		vscode.commands.registerCommand('codeassistgpt.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('codeassistgpt.Chat', () => {
			vscode.window.showInformationMessage("How are you bro",);
		})
	);

}

// This method is called when your extension is deactivated
export function deactivate() { }
