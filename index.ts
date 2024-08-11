function meanVal(a: number, b: any) {
    console.log(a + b)

}
meanVal(3, '3')
let newYear: number = 1900

type f = string | number

let num: f = 3
interface user {
    readonly id: number
    name: string
    role: string
    birthDay?: number,
    birthYear?: number,
    hasHobby: boolean,
    getData: (name: string, role: string) => void,
    setData: (name: string) => void
}
const programmer: user = {
    id: 2,
    name: 'Air',
    role: 'Front',
    birthDay: 24,
    birthYear: 2000,
    hasHobby: true,
    getData: (name, role) => {
        console.log(name + " has role: " + role)
    },
    setData: (name) => {
        console.log(name)
    }
}
programmer.getData(programmer.name, programmer.role)
programmer.setData('Tai')

