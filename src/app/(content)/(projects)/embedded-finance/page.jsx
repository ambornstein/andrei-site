
export default () => {
    return (
        <>
            <h1>Embedded Finance Tuition Portal</h1>
            <div className="flex flex-row flex-wrap gap-4">
                <a className="button" href="https://digital.wpi.edu/concern/student_works/cf95jg96c?locale=en">Academic Report</a>
                <a className="button" href="https://drive.google.com/drive/folders/1h79lR82fV9iK81qv4qgoalKJjMW7kJAy?usp=drive_link">Demo Screenshots</a>
            </div>
            <p>My team and I created a mock WPI tuition portal for Citizens Bank.
                This solution demonstrates a viable framework for implementing embedded finance in
                college services to forge fresh lending ties with students and fortify existing ones.
                Powered by React-based web framework Next.js and Prisma, an in-memory database ORM,
                the application mimicked accessing student tuition and bank data. It offered an interface
                embedding financial services and lending details. The team deployed the product onto Citizens
                Bank's CI/CD pipeline, aligning practices closely with the company's standards.</p>
        </>
    )
}