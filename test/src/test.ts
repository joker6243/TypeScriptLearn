export const test = () => {

    // const name:string = "Luluche"; //String
    // const age:number = 25; //number
    // const isStudent:boolean = false; //boolean
    // const hobbies: string[] =["Zero", "Suzaku", "Karen"]; //array
    // const address:object = {
    //     street: "123 Main Street",
    //     city: "London",
    //     state: "Britania"
    // }//Object
    // const today:Date = new Date(); //Date
    // const none:null = null; //null
    // const notDefined:undefined = undefined; //undefined
    // const random:any = "Hello World"; //any
    // const gender:"male" | "female" = "male"; //union
    // const value:String | number | null = "Hello World"; //union

    // // 問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
    // // 例：reverse array(["a", "b", "c"]) => ["c", "b", "a"]
    // // 実際にデータ型を定義してみよう：変数、引数、返り値
    // // オプション引数

    // const reverseArray = (arr:string[], hasTom?:boolean):string[] => {
    //     const reversedArray:string[] = [];
    //     let index:number = arr.length - 1;
    //     while(index >=0){
    //         reversedArray.push(arr[index]);
    //         index--;
    //     }

    //     if(hasTom){
    //         reversedArray.push("Tom");
    //     }
    //     return reversedArray;

    // }

    // console.log(reverseArray(["a", "b", "c"], true));

    // const user = {
    //     userId: 1,
    //     name: "Mika",
    //     age: 25,
    //     email: "mika@gmail.com",
    //     isActive: true,
    // }

    // interface UserProps{
    //     userId: number;
    //     name: string;
    //     age: number;
    //     email: string;
    //     isActive: boolean;
    // }

    // interface AdminUser extends UserProps {
    //     role: string;
    // }

    // type UserProps = {
    //     userId: number;
    //     name: string;
    //     age: number;
    //     email: string;
    //     isActive: boolean;
    // }

    // type AdminUserProps = UserProps & {
    //     role: string;
    // }

    // const createAccount = (accountInfo: AdminUserProps) => {

    // }

    // createAccount({
    //     userId: 1,
    //     name: "Mika",
    //     age: 25,
    //     email: "mika@gmail.com",
    //     isActive: true,
    //     role: "admin",
    // })

    // class User {
    //     userId: number;
    //     name: string;
    //     age: number;
    //     email: string;
    //     isActive: boolean;

    //     constructor(userId: number, name: string, age: number, email: string, isActive: boolean){
    //         this.userId = userId;
    //         this.name = name;
    //         this.age = age;
    //         this.email = email;
    //         this.isActive = isActive;
    //     }

    //     private getProfile(): string {
    //         return `Name: ${this.name}, Age: ${this.age}`;
    //     }

    //     static CodeGeass(): void {
    //         console.log("ルルーシュ・ヴィ・ブリタニアが命じる。");
    //     }
    // }

    // const user = new User(1, "Mika", 25, "mika@gmail.com", true);
    // User.CodeGeass();
    // user.getProfile();
    // public, private, protected

    // const foo = (arg: string):string => {
    //     return arg;
    // }

    // const foo = <T>(arg: T):T => {
    //     return arg;
    // }

    // foo<string>("Hello World!");

    // Typescriptの効果的な学習法
    // 1. VS Codeで飛ぶ
    // 2. chatGPTに変換してもらう
    // 3. エラーをよく読む
    // 4. 困ったらとりまAny

}