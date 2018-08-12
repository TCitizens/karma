import React from "react";
import { Modal, Icon, Message, Image } from "semantic-ui-react";
import { StyleSheet, css } from "aphrodite";
import PantryImg from "../../assets/pantry.jpg";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {}

  render() {
    return (
      <div>
        <Modal
          className={css(styles.bannerModal)}
          trigger={
            <Message className={css(styles.promoBanner)} color="teal">
              <Message.Header>Volunteer at a food pantry (+10)</Message.Header>
              <p>
                For a limited time, take part of this activity to gain
                <b> bonus </b>
                karma points!
              </p>
            </Message>
          }
        >
          <Modal.Header className={css(styles.modalHeader)}>
            Volunteer at your local food pantry
          </Modal.Header>
          <Modal.Description>
            <Image
              className={css(styles.pantryImg)}
              src={PantryImg}
              size="large"
            />

            <p className={css(styles.dateTime)}>
              <Icon
                className={css(styles.icon)}
                name="calendar times outline"
              />
              Mondays: 9:30AM to 12:30PM; Tuesdays: 9:00AM to 12:30PM.
              <br />
              <Icon className={css(styles.icon)} name="location arrow" />
              139 Henry Street N.Y.C., NY 10002
            </p>
            <p className={css(styles.description)}>
              We are looking for volunteers to help set up, run, and clean up
              the food pantry on and around weekly food distribution days. Food
              is distributed on Tuesdays between 9AM and 1PM.
            </p>

            <p className={css(styles.instructions)}>
              <i>
                * Click on the 'Add Activity' button on the bottom right of the
                page and select the promo category in the dropdown menu. This
                will be an additional{" "}
                <span className={css(styles.points)}>+10</span> points to your
                regular volunteering efforts.
              </i>
            </p>
          </Modal.Description>
        </Modal>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  promoBanner: {
    margin: "auto",
    marginRight: "50px"
  },
  bannerModal: {
    top: "100px"
  },
  modalHeader: {
    color: "#01b4c0",
    textAlign: "center"
  },
  dateTime: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "10px"
  },
  description: {
    marginLeft: "20px",
    marginRight: "20px"
  },
  instructions: {
    marginLeft: "20px",
    marginBottom: "20px",
    marginRight: "20px"
  },
  icon: {
    color: "#008a93"
  },
  pantryImg: {
    margin: "0 auto",
    marginTop: "15px",
    marginBottom: "15px"
  },
  points: {
    color: "green",
    fontWeight: "700"
  }
});

export default Banner;
