package dev.reid.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "grade")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "g_Id")
    private int gId;

    @Column(name = "s_Id")
    private int studentId;

    @Column(name = "time_Reported")
    private long timeReported;

    @Column(name = "note")
    private String note;

    @Column(name = "behavior")
    private Behavior behavior;

    public Grade() {
    }

    public Grade(int gId, int studentId, long timeReported, String note, Behavior behavior) {
        this.gId = gId;
        this.studentId = studentId;
        this.timeReported = timeReported;
        this.note = note;
        this.behavior = behavior;
    }

    public int getgId() {
        return gId;
    }

    public void setgId(int gId) {
        this.gId = gId;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public long getTimeReported() {
        return timeReported;
    }

    public void setTimeReported(long timeReported) {
        this.timeReported = timeReported;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Behavior getBehavior() {
        return behavior;
    }

    public void setBehavior(Behavior behavior) {
        this.behavior = behavior;
    }

    @Override
    public String toString() {
        return "Grade{" +
                "gId=" + gId +
                ", studentId=" + studentId +
                ", timeReported=" + timeReported +
                ", note='" + note + '\'' +
                ", behavior=" + behavior +
                '}';
    }
}
