import React, {useState,useEffect} from "react"
import '../css/customs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Media, Carousel } from 'react-bootstrap'
import firebase from '../firebase'


export default function Home() {
  const [name, setName] = useState('')
  const [number,setNumber] = useState('')
  // const [list,setList] = useState([])
  const [totalNumber,setTotalNumber] = useState(0)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // const totalNumber = list.map((l) => (parseInt(l.number))).reduce(reducer);
  
  useEffect(() => {
    firebase
    .firestore()
    .collection('TUCSO')
    .onSnapshot((snapShot) => {
      const listTuc = snapShot.docs.map((doc) => ({
        ...doc.data()
      }))
      // setList(listTuc)
      if (listTuc.length !== 0) {
        setTotalNumber(listTuc.map((l) => (parseInt(l.number))).reduce(reducer))
      }
      
    })
  },[])

function onSubmit(e) {
  e.preventDefault()
  
  if (!isNaN(parseInt(number)) && name.length != 0) {
    console.log( "Numner = ",number,parseInt(number))
    firebase
  .firestore()
  .collection('TUCSO')
  .add({
    name,
    number
  })
  .then(() => {
    setName('')
    setNumber('')
  })
  } else {
    alert("Bạn đã nhập Túc Số sai, Hãy nhập lại nào!")
  }
  

}

  return <div>
    <Container>
      <Row>
        <Col sm={12}>
        <Container>
            <Row>
              <Col style={{backgroundColor: "white" }}>
            <div>
                  <Media>
                    <img width={64} height={64} className="mr-3"
                      src="./logo.jpg"
                      alt="" />
                  </Media>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
            <div>
                  <h2 style={{color: "rgb(217,216,26)" }}>CHƯƠNG TRÌNH "CÙNG TÍCH LŨY 100 NGÀN LẦN HẠNH NGUYỆN VƯƠNG PHỔ HIỀN" - Lần 1 (9/2020)</h2>
                </div>
              </Col>
            </Row>

            
          </Container>
        </Col>
        
      </Row>
      <Row>
      <Col sm={9}>
      <Container>
        <Row>
          <Col>
          <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./slide1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./slide1.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./slide1.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
          </Col>
        </Row>
        <Row>
              <Col>
            <div>
            Nương nơi oai lực bao la của Chư Phật, chư Đại Bồ Tát, chư Hiền thánh Tăng, chư Đạo sư và nương vào những lời huấn thị tâm yếu của Tôn Sư Garchen Rinpoche, phòng Zoom Bồ Đề Tâm đã khởi sự tổ chức chương trình "Cùng Tích Lũy 100 Ngàn Lần Hạnh Nguyện Vương Phổ Hiền".
<br/>
Hằng tuần chúng ta gặp nhau tại Zoom Bồ Đề Tâm Việt Ngữ, cùng tụng đọc bài Hạnh Nguyện Vương Phổ Hiền để tích lũy thiện đức và hồi hướng đến quả vị giác ngộ của toàn thể chúng sinh, đặc biệt là cho những ai đang bị hành hạ thân tâm và cho các oan gia nhiều đời kiếp. Nguyện tất cả bước vào đường đi của Bồ Tát, thể nhập được bản tâm nguyên sơ và hoàn toàn được giải thoát.
<br/>
Lịch cụ thể như sau:
<ul>
  <li>
  	Thứ ba 8PM – 9PM PST Cali (giờ Việt Nam 10h – 11h sáng thứ Tư.)
  </li>
  <li>
  	Thứ năm 6AM – 7AM PST Cali (giờ Việt Nam 8h – 9h tối thứ Năm.)
  </li>
  <li>
  	Thứ năm 8PM – 9PM PST Cali (giờ Việt Nam 10h – 11h sáng thứ Sáu.)
  </li>
</ul>

<p>Zoom Bồ Đề Tâm Việt Ngữ:</p>
<a href="https://us02web.zoom.us/j/81954019396">https://us02web.zoom.us/j/81954019396</a>
<br/>
ID: 819 5401 9396
<br/>
Chương trình được bắt đầu vào thứ Năm 24/9/2020 lúc 6AM California (8PM thứ Năm Việt Nam)



            </div>
              </Col>
            </Row>
      </Container>
      </Col>
        <Col sm={3} style={{border: "1px solid #C2C317" }} >
          <Container>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col>
              <Container fluid= "md">
                <Row><Col style={{textAlign: "center" }}><img width={150} height={150} src="./iconTucSo.png" /><br /></Col></Row>
                <Row><Col style={{textAlign: "center"}}><p><h3> Tổng số túc số</h3></p></Col></Row>
<Row><Col style={{textAlign: "center"}}><p><h2>{totalNumber}</h2></p></Col></Row>
              </Container>                
              </Col>
            </Row>
            <Row>
              <Col><hr/></Col>
            </Row>
            <Row>
              <Col>
                <h6>Để gữi túc số hãy điền thông tin như sau:</h6>
                <form onSubmit={onSubmit}>
                <div><label>Họ và tên:</label> <input type="text" value={name} onChange={ e => setName(e.currentTarget.value)}/></div>
                <div><label>Nhập số túc:</label> <input type="text" value={number} onChange={ e => setNumber(e.currentTarget.value)}/></div>
                <br/>
                <div className="text-center"><button className="btn btn-success">Gữi</button></div>
                
                </form>
                

              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
}
