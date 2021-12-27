import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();
export default function Player({ children, ...restProps }) {
	const [showPlayer, setShowPlayer] = useState(false);
	return (
		<PlayerContext value={{ showPlayer, setShowPlayer }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext>
	);
}

Player.Video = function PlayerVideo({ children, ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext);

	return showPlayer
		? ReactDOM.createPortal(
				<Overlay onClick={() => setShowPlayer(!showPlayer)}>
					<Inner>
						<Video id="Netflix-player" controls>
							<Source src="/videos/bunny.mp4" type="video/mp4" />
						</Video>
						<Close />
					</Inner>
				</Overlay>,
				document.body
		  )
		: null;
};

Player.Button = function PlayerButton({ ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext);
	return (
		<Button {...restProps} onClick={() => setShowPlayer(!showPlayer)}>
			Play
		</Button>
	);
};
