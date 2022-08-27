let text = "mulai"

export function setup() {
    text = "setup"
    console.log(text)
    return { v: 123, teguh:"ganteng" };
}

export default function (data) {
    console.log(JSON.stringify(data));
    text = "VUS"
    console.log(text)

}

export function teardown(data) {
    text = "teardown"
    console.log(text)
    if (data.v != 123) {
    throw new Error('incorrect data: ' + JSON.stringify(data.teguh));
    }
}
