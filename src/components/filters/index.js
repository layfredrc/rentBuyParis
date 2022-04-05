import {
	Button,
	Checkbox,
	NumberInput,
	RangeSlider,
	Menu,
	Radio,
	RadioGroup,
} from "@mantine/core";
import { BiSlider } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

// Components
import Filter from "../filter";

// Style
import styles from "./index.module.css";

const marks = [
	{ value: 0, label: "0€" },
	{ value: 100, label: "10000€" },
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
	"Denfert-Rochereau",
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
	resetFilters,
	orderBy,
	setOrderBy,
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
							leftIcon={<BiSlider color="white" size={18} />}
						>
							Apply Filter
						</Button>
					}
				>
					<Menu.Label>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<span>Filters</span>
							<MdRefresh size={18} onClick={() => resetFilters} />
						</div>
					</Menu.Label>
					<Menu.Item>
						<Filter title="District">
							<div style={{ display: "flex" }}>
								<div style={{ width: "4.5em", marginRight: "10px" }}>
									<NumberInput
										defaultValue={0}
										required
										min={0}
										max={19}
										value={district}
										onChange={setDistrict}
									/>
								</div>
								<span style={{ minWidth: "max-content", alignSelf: "center" }}>
									{district
										? `ème arr (${districts[district - 1]})`
										: "No preference"}
								</span>
							</div>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="Price">
							<RadioGroup value={orderBy} onChange={setOrderBy}>
								<Radio value="ascending">
									<span style={{ fontSize: "14px" }}>Low - High</span>
								</Radio>
								<Radio value="descending">
									<span style={{ fontSize: "14px" }}>High - Low</span>
								</Radio>
							</RadioGroup>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="General">
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
				<Filter title="District">
					<div style={{ display: "flex" }}>
						<div style={{ width: "4.5em", marginRight: "10px" }}>
							<NumberInput
								defaultValue={0}
								required
								min={0}
								max={20}
								value={district}
								onChange={setDistrict}
							/>
						</div>
						<span style={{ minWidth: "max-content", alignSelf: "center" }}>
							{district
								? `ème arr (${districts[district - 1]})`
								: "No preference"}
						</span>
					</div>
				</Filter>
				<Filter title="Price">
					<RangeSlider
						defaultValue={[priceInterval[0], priceInterval[1]]}
						color="#3EA6C7"
						marks={marks}
						label={(value) => `${value * 100} €`}
						styles={(theme) => ({
							label: {
								backgroundColor: theme.white,
								color: theme.black,
							},
						})}
						onChange={(value) => setPriceInterval(value)}
					/>
				</Filter>
				<Filter title="General">
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
				<div style={{ textAlign: "center" }}>
					<Button
						color="dark"
						radius={0}
						size="md"
						leftIcon={<BiSlider color="white" size={18} />}
						onClick={resetFilters}
					>
						Reset filters
					</Button>
				</div>
			</div>
		</div>
	);
}
