/** JavaScript **/
//作成日：2020/05/09
//タイトル：TODOリスト

/** 行自動追加 **/

function colAdd(){
  //初期値設定
  const date=document.forms.formTest.input1.value;
  const body=document.forms.formTest.input2.value;
  const priority=document.forms.formTest.input3.value;
  const status=document.forms.formTest.input4.value;
  //配列を宣言
  let Arr=[date,body,priority,status];

  //テーブルのIdを取得する
  let table=document.getElementById('Table');
  //行末に行を追加する
  let row=table.insertRow(-1);

  //td分値（セルを追加）
  //TODO: 一個一個設定するのは非効率なため配列にしてはどうか？
  //入力値分ループしてセルを作成
  let cells;
  for(let i=0; i<Arr.length; i++){
      cells=row.insertCell(-1);
      //セル末に削除ボタン追加
      if(i === Arr.length-1){
        cells.innerHTML='<input type="button" id="rowDel" name="rowDel" value="削除" onClick="rowDel(this);"/>';
      }else{
        cells.innerHTML=Arr[i];
      }
  }

}
/** 行削除 **/
function rowDel(obj) {
  if(window.confirm('この行を削除しますか？')==true){
    // 削除ボタンを押下された行を取得
    tr = obj.parentNode.parentNode;
    // trのインデックスを取得して行を削除する
    tr.parentNode.deleteRow(tr.sectionRowIndex);
  }else{
    return false;
  }

   }


/** Jsonデータ作成 **/
function JsonEditor(Json){
  //Json化済データである場合
  if(Json === True){
    //Json化処理を呼び出す

  }else{//Json化されていない場合
    //表示項目設定処理を呼び出す

  }
}
