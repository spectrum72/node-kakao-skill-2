Templates = {

};

class Template {
    template = {
        version: "2.0",
        template: {
            outputs: []
        }
    }

    Template() {
        this.output = this.template.template.outputs;
    }

    addSimpleText = (text) => {
        this.output.push({
            simpleText: {
                text: text
            }
        });
    };


}

module.exports = {
    Template
}