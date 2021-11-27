import { Avatar, Button, Input } from '@material-ui/core';
import { AssignmentTurnedInOutlined, ExpandMore, FeaturedPlayListOutlined, HomeOutlined, LanguageOutlined, NotificationsOutlined, PeopleAltOutlined, SearchOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import '../css/Navbar.css'
import db,{auth} from '../firebase'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Modal from 'react-modal';
import firebase from 'firebase'

function Navbar() {

  const user = useSelector(selectUser)

  const [openModal, setOpenModal] = useState(false)
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");


  const handleQuestion =(e)=>{

      e.preventDefault()     
      setOpenModal(false)  
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInput("");
      setInputUrl("");
  }

    return (
        <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeOutlined />
        </div>

        <div className="qHeader__icon">
          <FeaturedPlayListOutlined />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlined />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlined />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlined />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchOutlined />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
        </div>
        <LanguageOutlined />
        <Button onClick={()=>setOpenModal(true)}>Add Question</Button>
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
             required
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              {/* <Link /> */}
              <input
               value={inputUrl}
               onChange={(e)=>setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button onClick={handleQuestion} type="sumbit"  className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
    )
}

export default Navbar
