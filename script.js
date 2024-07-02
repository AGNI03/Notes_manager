{
    let main = document.getElementById("main");
    let input = document.getElementById("input");
    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let num = 0;
    let edit = 0;
    let card_ttl = "";
    let card_txt = "";

    //Add memo
    function add_note() {
        input.style.visibility = "visible";
    }

    //create memo
    function create_note(ttl, txt) {
        let block =
            `<p id="${num}-ttl" class="ttl">` + ttl + `</p>
            <p id="${num}-txt" class="txt">` + txt + `</p>
            <div class="options">
                <svg class="edit" onclick="edit_note('${num}-ttl', '${num}-txt');" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"><title>edit-file</title>
                  <path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4
                  21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7
                  22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2
                  16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" />
                </svg> 

                <svg class="delete" onclick="this.parentNode.parentNode.remove()" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"><title>delete-file</title>
                  <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,
                  9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                </svg>
            </div>`;
        num++;
        if (num > 9999) { num = 0; }
        let new_note = document.createElement("div");
        new_note.setAttribute("class", "note");
        new_note.innerHTML = block;
        main.appendChild(new_note);
        cancel_note();
    }

    //Edit memo
    function edit_note(ttl, txt) {
        edit = 1;
        card_ttl = document.getElementById(ttl);
        card_txt = document.getElementById(txt);
        input.style.visibility = "visible";
        title.value = card_ttl.innerHTML;
        text.value = card_txt.innerHTML;
    }

    //Update memo
    function update_note(ttl, txt) {
        card_ttl.innerHTML = ttl;
        card_txt.innerHTML = txt;
        cancel_note();
    }

    //Read Input
    function read_note() {
        let ttl = title.value;
        let txt = text.value;
        if (ttl == "" && txt == "") {
            input.style.visibility = "hidden";
            return;
        }
        switch (edit) {
            case 0: create_note(ttl, txt); break;
            case 1: update_note(ttl, txt); edit = 0;
        }
    }

    //Cancel memo
    function cancel_note() {
        title.value = "";
        text.value = "";
        input.style.visibility = "hidden";
    }
}