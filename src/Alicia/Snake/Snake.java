package Alicia.Snake;

import java.awt.EventQueue;
import javax.swing.JFrame;
//taken from http://zetcode.com/tutorials/javagamestutorial/snake/
public class Snake extends JFrame {
    public Snake() {
        initUI();
    }
    private void initUI() {
        add(new Board());

        setResizable(false);
        pack();

        setTitle("Snake");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            JFrame ex = new Snake();
            ex.setVisible(true);
        });
    }
}
