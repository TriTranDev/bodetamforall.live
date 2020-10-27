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
      alert("Bạn đã nhập Túc Số thành công!")
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
                    <img style={{maxWidth:'64px', height:'auto'}} className="mr-3"
                      src="./logo.jpg"
                      alt="" />
                  </Media>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={9}>
            <div>
                  <h2 style={{color: "rgb(182, 140, 66)" }}>CHƯƠNG TRÌNH "CÙNG TÍCH LŨY 100 NGÀN LẦN HẠNH NGUYỆN VƯƠNG PHỔ HIỀN" - Lần 1 (9/2020)</h2>
                </div>
              </Col>
<Col sm={3}></Col>
            </Row>

            
          </Container>
        </Col>
        
      </Row>
      <Row>
      <Col sm={9}>
      <Container>
        <Row>
          <Col>
          <Carousel interval={20000}>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src="./slide4.jpg"
                      alt="First slide"
                    />
                    
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./slide2.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src="./slide3.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src="./slide1.jpg"
                      alt="Third slide"
                    />

                    
                  </Carousel.Item>
                </Carousel>
          </Col>
        </Row>
        <Row>
              <Col>
            <p/>
            <div>
            Nương nơi oai lực bao la của Chư Phật, chư Đại Bồ Tát, chư Hiền thánh Tăng, chư Đạo sư và nương vào những lời huấn thị tâm yếu của Tôn Sư Garchen Rinpoche, phòng Zoom Bồ Đề Tâm đã khởi sự tổ chức chương trình "Cùng Tích Lũy 100 Ngàn Lần Hạnh Nguyện Vương Phổ Hiền".
<br/>
Hằng tuần chúng ta gặp nhau tại Zoom Bồ Đề Tâm Việt Ngữ, cùng tụng đọc bài Hạnh Nguyện Vương Phổ Hiền để tích lũy thiện đức và hồi hướng đến quả vị giác ngộ của toàn thể chúng sinh, đặc biệt là cho những ai đang bị hành hạ thân tâm và cho các oan gia nhiều đời kiếp. Nguyện tất cả bước vào đường đi của Bồ Tát, thể nhập được bản tâm nguyên sơ và hoàn toàn được giải thoát.
<br/>
Lịch cụ thể như sau:
<ul>
  <li>
    <h6>Buổi 1</h6>
    Giờ PST – CA: thứ ba 8g. – 9g. tối <br/>
    Giờ Việt Nam: thứ tư 10g. – 11g. sáng
  	
  </li>
  <li>
  <h6>Buổi 2</h6>
  Giờ PST – CA: thứ năm 6g. – 7g. sáng <br/>
  Giờ Việt Nam: thứ năm 8g. – 9g. tối
  </li>
  <li>
  <h6>Buổi 3</h6>
  Giờ PST – CA: thứ năm 8g. – 9g. tối <br/>
  Giờ Việt Nam: thứ sáu 10g. – 11g. sáng
  </li>
</ul>

Zoom Bồ Đề Tâm Việt Ngữ:<br/>
<a href="https://us02web.zoom.us/j/81954019396">https://us02web.zoom.us/j/81954019396</a><br/>
<a href="https://www.facebook.com/zoombodetam4allviet">https://www.facebook.com/zoombodetam4allviet</a> 
<br/>
ID: 819 5401 9396
<br/>
Chương trình được bắt đầu vào thứ Năm 24/9/2020 lúc 6AM California (8PM thứ Năm Việt Nam)
<br/>



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
                <Row><Col style={{textAlign: "center"}}><p><h3> Tổng túc số</h3></p></Col></Row>
<Row><Col style={{textAlign: "center"}}><p><h2>{totalNumber}</h2></p></Col></Row>
              </Container>                
              </Col>
            </Row>
            <Row>
              <Col><hr/></Col>
            </Row>
            <Row>
              <Col style={{paddingRight:0, paddingLeft:0}}>
                <h6>Để gửi túc số hãy điền thông tin như sau:</h6>
                <form onSubmit={onSubmit}>
                  <Container>
                    <Row>
                      <Col><label>Họ và tên:</label></Col>
                      <Col><input  type="text" value={name} onChange={ e => setName(e.currentTarget.value)}/></Col>
                    </Row>
                    
                    <Row>
                      <Col><label>Nhập túc số:</label></Col>
                      <Col><input type="text" value={number} onChange={ e => setNumber(e.currentTarget.value)}/></Col>
                    </Row>
                  </Container>
                  
                <br/>
                <div className="text-center"><button className="btn btn-success">Gửi Túc Số</button></div>
                
                </form>
                

              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
}
