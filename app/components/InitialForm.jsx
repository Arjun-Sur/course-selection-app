import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";

export default function InitialForm() {
    return (
        <Form className="border-2 rounded-xl border-rose p-4">
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" required />
            <Form.Text className="text-muted">
              Enter your legal first name as it appears in Aeries
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" required />
            <Form.Text className="text-muted">
              Enter your legal last name as it appears in Aeries
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Student ID</Form.Label>
            <Form.Control type="text" placeholder="Enter student ID" required />
            <Form.Text className="text-muted">
              Enter your student ID as it appears in Aeries (i.e. 1215087)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Grade</Form.Label>
            <Form.Select aria-label="Pick your grade you are scheduling courses for" required>
              <option>Grade you are selecting courses for</option>
              <option value="9">9th Grade (Freshman year)</option>
              <option value="10">10th Grade (Sophomore year)</option>
              <option value="11">11th Grade (Junior year)</option>
              <option value="12">12th Grade (Senior year)</option>
            </Form.Select>
            <Form.Text className="text-muted">
              This is not your current grade; it is the grade you are entering!
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Continue
          </Button>
        </Form>
    )
}