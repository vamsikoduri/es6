class Comment {

    constructor(content, children) {
        this.content = content;
        this.children = children;
    }


    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const innerCommnets = [
    new Comment('getLost',[]),
    new Comment('dont bother',[])

]

const children = [
    new Comment('good comment', innerCommnets),
    new Comment('bad comment', []),
    new Comment('average comment', [])

]

const commentList = [];
const tree = new Comment('The starting comment', children);

for (let comment of tree) { commentList.push(comment); }
console.log(commentList);
