// import {pi, area} from "./moduleA"
//
// const r = 10;
//
// const result = area(r);
//
// function dealy(): Promise<string> {
//
//     // @ts-ignore
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 resolve(area(r));
//             }, 2000)
//         } catch (error) {
//             reject(error);
//         }
//     });
// }
//
// dealy().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// });

// function asyncOperation(success: boolean): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve("操作成功！");
//             } else {
//                 reject("操作失败！");
//             }
//         }, 2000);
//     });
// }

let successCount = 0;
let failCount = 0;

function loadData(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        setTimeout(() => {
            if (success) {
                resolve("数据加载成功！");
                successCount++;
            } else {
                reject("数据加载失败！");
                failCount++;
            }
        }, 2000);
    });
}

for (let i = 0; i < 10; i++) {
    loadData().then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        if (successCount + failCount === 10) {
            console.log(`成功次数: ${successCount}, 失败次数: ${failCount}`);
        }
    });
}

