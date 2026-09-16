package producer;
class Test {
    int n;
    boolean available = false;

    synchronized void produce(int x) throws Exception {
        while (available) {
            wait();
        }
        n = x;
        System.out.println("producer:" + n);
        available = true;
        notify();
    }

    synchronized void consumer() throws Exception {
        while (!available) {
            wait();
        }
        System.out.println("consumer" + n);
        available = false;
        notify();
    }
}

class Producer extends Thread {
    Test t;

    Producer(Test t) {
        this.t = t;
    }

    public void run() {
        try {
            for (int i = 1; i <= 5; i++)
                t.produce(i);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class Consumer extends Thread {
    Test t;

    Consumer(Test t) {
        this.t = t;
    }

    public void run() {
        try {
            for (int i = 1; i <= 5; i++)
                t.consumer();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

public class producerconsumer {
    public static void main(String[] args) {
        Test t = new Test();
        Producer p = new Producer(t);
        Consumer c = new Consumer(t);
        p.start();
        c.start();
    }
}
