async function apiCall1(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("API Call 1 completed");
        }, 1000);
    });
}

async function apiCall2(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("API Call 2 completed");
        }, 1000);
    });
}

async function apiCall3(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("API Call 3 completed");
        }, 1000);
    });
}

async function executeCalls(): Promise<void> {

    const result1 = await apiCall1();
    console.log(result1);

    const result2 = await apiCall2();
    console.log(result2);

    const result3 = await apiCall3();
    console.log(result3);
}

executeCalls();
