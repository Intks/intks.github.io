const noteInfoDTOList = [
  {
    id: 0,
    date: '2019-02-19',
    noteTitle: 'JS 常用Str, Arr函數',
    noteContent: `常用的String函數<br>
    concat() – 將兩個或多個字符的文本組合起來，返回一個新的字符串。<br>
    indexOf() – 返回字符串中一個子串第一處出現的索引。如果沒有匹配項，返回 -1 。<br>
    charAt() – 返回指定位置的字符。<br>
    lastIndexOf() – 返回字符串中一個子串最後一處出現的索引，如果沒有匹配項，返回 -1 。<br>
    match() – 檢查一個字符串是否匹配一個正則表達式。<br>
    substr() 函數 -- 返回從string的startPos位置，長度為length的字符串<br>
    substring() – 返回字符串的一個子串。傳入參數是起始位置和結束位置。<br>
    slice() – 提取字符串的一部分，並返回一個新字符串。<br>
    replace() – 用來查找匹配一個正則表達式的字符串，然後使用新字符串代替匹配的字符串。<br>
    search() – 執行一個正則表達式匹配查找。如果查找成功，返回字符串中匹配的索引值。否則返回 -1 。<br>
    split() – 通過將字符串劃分成子串，將一個字符串做成一個字符串數組。<br>
    length – 返回字符串的長度，所謂字符串的長度是指其包含的字符的個數。<br>
    toLowerCase() – 將整個字符串轉成小寫字母。<br>
    toUpperCase() – 將整個字符串轉成大寫字母。<br>
    <br>
    常用的Array函數<br>
    concat() 連接兩個或更多的數組，並返回結果。<br>
    join() 把數組的所有元素放入一個字符串。元素通過指定的分隔符進行分隔。<br>
    pop() 刪除並返回數組的最後一個元素。  <br>
    shift() 刪除並返回數組的第一個元素<br>
    push() 向數組的末尾添加一個或更多元素，並返回新的長度。<br>
    unshift() 向數組的開頭添加一個或更多元素，並返回新的長度。<br>
    reverse() 顛倒數組中元素的順序。<br>
    slice() 從某個已有的數組返回選定的元素<br>
    sort() 對數組的元素進行排序<br>
    splice() 刪除元素，並向數組添加新元素。<br>
    toSource() 返回該對象的源代碼。<br>
    toString() 把數組轉換為字符串，並返回結果。<br>
    toLocaleString() 把數組轉換為本地數組，並返回結果。<br>
    valueOf() 返回數組對象的原始值<br>
    `,
    category: 'JavaScript'
  },
  {
    id: 1,
    date: '2019-02-19',
    noteTitle: 'JavaScript 設置 css樣式的幾種方式',
    noteContent: `/* 1.直接設置style屬性 */ element.style.height = '100px’; <br>
    /* 2.直接設置屬性 */ element.setAttribute('height', '100px’);<br>
     /* 3.使用setAttribute 設置 style屬性 */ element.setAttribute('style', 'height: 100px !important’);<br>
     /* 4.使用setProperty設置屬性，通過第三個參數設置important */ element.style.setProperty('height', '300px', 'important'); <br>
    /* 5.設置cssText */ element.style.cssText += 'height: 100px !important';<br>
    `,
    category: 'JavaScript'
  }
]

export {noteInfoDTOList}
