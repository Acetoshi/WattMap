import PropTypes from "prop-types";
import CardStation from "./CardStation";

export default function FutureReservations({ reservations = [] }) {

  return (
    <section>
      {reservations ? (
        <ul>
          {reservations.map((reservation) => {
            // this part is used to convert date into a readable string
            const date = new Date(reservation.reservationDate);
            const dateString = `${date.toLocaleDateString("fr")} - ${date.toLocaleTimeString(["fr"], { hour: "2-digit", minute: "2-digit" })}`;
            return (
              <li key={reservation.reservationDate+reservation.stationId} className="list-unstyled">
                <CardStation
                  displayMode={2}
                  station={{
                    name: reservation.stationName,
                    address: reservation.stationAddress,
                    imgUrl: reservation.stationImgUrl,
                  }}
                  date={dateString}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        "Aucune réservation dans l'historique, voir la carte ?"
      )}
    </section>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
FutureReservations.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      reservationDate: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      stationId: PropTypes.number.isRequired,
      stationAddress: PropTypes.string.isRequired,
      stationImgUrl: PropTypes.string.isRequired,
      stationName: PropTypes.string.isRequired,
    })
  ),
};
