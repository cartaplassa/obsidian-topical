# Obsidian Tabs

Thanks to the [Code Tab](https://github.com/lazyloong/obsidian-code-tab) plugin for the inspiration, but since it had not been updated for a long time and it wasn't support edit content directly, I refactored the plugin and added a lot of features.

> [!WARNING] 
> **Please refrain from entering tasks directly within the Tabs code block.**
> 
> The Tabs function operates based on the code block. In Obsidian, text within a code block is treated as plain text. Consequently, if you input tasks inside a code block, neither the tasks plugin nor the dataview plugin will be able to recognize them.

## Showcase

Insert a tab component into markdown file.

![tabs-1](./assets/tabs-1.png)

![tabs-2](./assets/tabs-2.png)

Nested use tabs.

![tabs-4](./assets/tabs-4.png)

With Dataview & Tasks

![tabs-3](./assets/tabs-3.png)

With LeetCode

![tabs-7](./assets/tabs-7.png)

> If you have a usage you'd like to share, feel free to raise an issue or pull a request. I'll add it to readme.

## Usage

### 1. Create a tabs code block

Generate a tab component using the tab code block.

````
```tabs
tab: TAB ONE
Content of TAB ONE

tab: TAB TWO
Content of TAB TWO
```
````

### 2. With other code block

If your tab contents have code block, you need to use more `, like

`````
````tabs
tab: python
```python
print("Hello Tabs")
```

tab: javascript
```javascript
console.log('Hello Tabs');
````
`````

Or you can use '~' to create code block, like

````
~~~tabs
tab: python
```python
print("Hello Tabs")
```

tab: javascript
```javascript
console.log('Hello Tabs');
```
~~~
````

![tabs-5](./assets/tabs-5.png)


With this feature, you can create tabs component nested.

`````
````tabs
tab: TAB-ONE
An innerTab in TAB-ONE 👇

```tabs
tab: inner tab one
This is an inner tab.

tab: inner tab two
This is an inner tab.
```

tab: TAB-TWO
````
`````

or use '~' to create code block(inside or outside).

````
~~~tabs
tab: TAB-ONE
An innerTab in TAB-ONE 👇

```tabs
tab: inner tab one
This is an inner tab.

tab: inner tab two
This is an inner tab.
```

tab: TAB-TWO
~~~
````

![tabs-6](./assets/tabs-6.png)

### 3. Edit tab

Double click the content can rouse an editor.

![tabs-editing](./assets/editing.png)

If you want to delete a tab, you can right click the tab and delete it.

![tabs-delete](./assets/tabs-delete.gif)

If you accidentally delete a tab, you can use `ctrl z` to restore it.

You can quickly create a new tab using the contents of the clipboard.

![tabs-paste](./assets/tabs-paste.gif)

tip: if tab nav is too long, try to hold `shift` and scroll.

Remember to click the save button after editing.

### 4. Command

Provides a command to quickly create or convert selected text to a Tabs component. Click `Cmd-p` to open the setting pannel. Search for 'Tabs'.

![tabs-command](./assets/tabs-command.png)

### 5. Settings

![tabs-setting](./assets/tabs-settingTab.png)

## Todo

- Update editor.
- Draggable tab nav item.