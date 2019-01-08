import React from "react";

class Key extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown.bind(this));

		const pressedKey = document.getElementById(
			`key-${this.props.letterCode}`
		);
		pressedKey.addEventListener(
			"transitionend",
			this.removePlaying.bind(this)
		);
	}
	handleKeyDown(e) {
		if (e.keyCode == parseInt(this.props.letterCode, 10)) {
			this.activateSound();
		}
	}
	activateSound() {
		const { letterCode, sound } = this.props;
		const audioEl = document.getElementById(`${sound}-${letterCode}`);
		audioEl.play();

		const pressedKey = document.getElementById(`key-${letterCode}`);
		pressedKey.classList.add("playing");
	}
	removePlaying(e) {
		e.target.classList.remove("playing");
	}
	render() {
		const { letterCode, letter, sound } = this.props;
		return (
			<div id={`key-${letterCode}`} className="key" data-key={letterCode} onClick={
				() => this.activateSound()
			}>
				<kbd>{letter}</kbd>
				<p>{sound}</p>
				<audio
					id={`${sound}-${letterCode}`}
					src={`/drumkit/sounds/${sound}.wav`}
				/>
			</div>
		);
	}
}

export default Key;

// Key coumponent
// on mounting
// add event listerner on mounting on keydown
// pointing to a keydown keypresshandler
//   kjepresshandler:
//   check if e.keyCode is equal to parse int of the props.id
//   then activateSound()
//     activateSoud:
//     get the audioElement
//     add plaiying class by element.classList.add('classtobeadded')
//     element.currentTime = 0;
//     play element

//     get the keyElement
//     key.classList.add('playing')
// get the keyElement
// if(key) add event listerner transition,removePlaying
//    removePlaying:
//    e.target.classList.remove('playing');

// render:
// div -add key + id , data-key={id}
//   kbd - label letter
//   span - name of key
//   audio - add sound + id
//     source type"adio/wav" src={`audio ${sound}.wav`}

//how to use:
// <div className="keys">
//   <Key id="65" letter="A" sound="clap" />
//   <Key id="83" letter="S" sound="hihat" />
//   <Key id="68" letter="D" sound="kick" />
//   <Key id="70" letter="F" sound="openhat" />
//   <Key id="71" letter="G" sound="boom" />
//   <Key id="72" letter="H" sound="ride" />
//   <Key id="74" letter="J" sound="snare" />
//   <Key id="75" letter="K" sound="tom" />
//   <Key id="76" letter="L" sound="tink" />
// </div>