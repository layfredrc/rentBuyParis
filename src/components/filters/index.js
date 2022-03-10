import {
	Button,
	Checkbox,
	NumberInput,
	RangeSlider,
	Menu,
	RadioGroup,
	Radio,
} from "@mantine/core";
import { MdFilterAlt } from "react-icons/md";

// Components
import Filter from "../filter";

// Style
import styles from "./index.module.css";

const marks = [
	{ value: 0, label: "0€" },
	{ value: 100, label: "100k€" },
];

const districts = [
	"Louvre",
	"Opéra",
	"Marais",
	"Notre-Dame de Paris",
	"Saint-Michel",
	"Saint-Germain",
	"Invalides",
	"Champs-Elysées",
	"Galeries Lafayette",
	"Place de la République",
	"Bastille",
	"Gare de Lyon",
	"Gare d'Austerlitz",
	"Tour Eiffel",
	"Trocadéro",
	"Place des Ternes",
	"Montmartre",
	"Parc des Buttes-Chaumont",
	"Père Lachaise",
];

export default function Filters({
	district,
	setDistrict,
	priceInterval,
	setPriceInterval,
	parking,
	setParking,
	elevator,
	setElevator,
	garden,
	setGarden,
	terrace,
	setTerrace,
}) {
	return (
		<div>
			<div className={styles.mobile}>
				<Menu
					size={260}
					placement="center"
					closeOnItemClick={false}
					zIndex={10}
					control={
						<Button
							color="dark"
							radius={0}
							size="md"
							className={styles.button}
							leftIcon={<MdFilterAlt color="white" size={18} />}
						>
							Apply Filter
						</Button>
					}
				>
					<Menu.Label>Filters</Menu.Label>
					<Menu.Item>
						<Filter title="Quartier">
							<div style={{ display: "flex" }}>
								<div style={{ width: "4.5em", marginRight: "10px" }}>
									<NumberInput
										defaultValue={0}
										required
										min={1}
										max={19}
										value={district}
										onChange={setDistrict}
									/>
								</div>
								<span style={{ minWidth: "max-content", alignSelf: "center" }}>
									{district
										? `ème arr (${districts[district - 1]})`
										: "Aucune préférence"}
								</span>
							</div>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="Prix">
							<Checkbox
								onChange={() => {}}
								checked={false}
								label="High - Low"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => {}}
								checked={false}
								label="Low - High"
								style={{ marginBottom: "10px" }}
							/>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="Général">
							<Checkbox
								onChange={(event) => setParking(event.target.checked)}
								checked={parking}
								label="Parking"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={(event) => setElevator(event.target.checked)}
								checked={elevator}
								label="Elevator"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={(event) => setGarden(event.target.checked)}
								checked={garden}
								label="Garden"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={(event) => setTerrace(event.target.checked)}
								checked={terrace}
								label="Terrace / Balcony"
								style={{ marginBottom: "10px" }}
							/>
						</Filter>
					</Menu.Item>
				</Menu>
			</div>

			<div className={styles.desktop}>
				<Filter title="Quartier">
					<div style={{ display: "flex" }}>
						<div style={{ width: "4.5em", marginRight: "10px" }}>
							<NumberInput
								defaultValue={0}
								required
								min={1}
								max={19}
								value={district}
								onChange={setDistrict}
							/>
						</div>
						<span style={{ minWidth: "max-content", alignSelf: "center" }}>
							{district
								? `ème arr (${districts[district - 1]})`
								: "Aucune préférence"}
						</span>
					</div>
				</Filter>
				<Filter title="Prix">
					<RangeSlider
						defaultValue={[priceInterval[0], priceInterval[1]]}
						marks={marks}
						color="#3EA6C7"
						label={(value) => `${value}k €`}
						styles={(theme) => ({
							label: {
								backgroundColor: theme.white,
								color: theme.black,
							},
						})}
						onChange={(value) => setPriceInterval(value)}
					/>
				</Filter>
				<Filter title="Général">
					<Checkbox
						onChange={(event) => setParking(event.target.checked)}
						checked={parking}
						label="Parking"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={(event) => setElevator(event.target.checked)}
						checked={elevator}
						label="Elevator"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={(event) => setGarden(event.target.checked)}
						checked={garden}
						label="Garden"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={(event) => setTerrace(event.target.checked)}
						checked={terrace}
						label="Terrace / Balcony"
						style={{ marginBottom: "10px" }}
					/>
				</Filter>
			</div>
		</div>
	);
}
