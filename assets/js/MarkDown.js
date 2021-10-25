
 export default class Markdown {
    constructor(props) {
        this.parse = props;
        this.res = [];
        this.exec();
    }


    exec() {
        let res = this.parse.match(/(#+\s*)|(\S+\s+|\S+|)|\n/g);
        res = res.join('');
        res.split('\n').forEach(element => {
            this.res.push(element.trim());
        });
    }


    parseHTML() {
        let elArr = [];
        this.res.forEach(element => {
            let arr = [];
            if (element.indexOf('#') != -1) {
                arr = element.match(/(#+\s(1))|(\S+)|\n/g);
            } else {
                arr = element;
            }
            if (Array.isArray(arr)) {
                let num;
                if (arr[0].length > 6) {
                    num = 6;
                } else {
                    num = arr[0].length
                }
                let el = document.createElement('h' + num);
                el.innerHTML = arr[1];
                elArr.push(el);
            } else {
                let el = document.createElement('p');
                el.innerHTML = arr;
                elArr.push(el)
            }
        });
        return elArr;
    }
}
    
