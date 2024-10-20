import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Button,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import BaseButton from "@/components/button/button";
import { StaffMember } from "@/core /models/staff";
import { mockStaffMembers } from "@/core /constants/staff";
import { Trip } from "@/core /models/trip";

const AddNewTrip = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [trip, setTrip] = useState<Trip>({
    id: 0,
    date: "",
    staffMembers: [],
    pickupTime: "",
    area: "",
    signature: "",
  });

  // #region Date Picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date = new Date()
  ) => {
    if (event.type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        setPickupDate(currentDate.toString().substring(0, 15));
        setTrip((state) => {
          return { ...state, date: currentDate.toString().substring(0, 15) };
        });
        handleToggleDatePicker();
      }
    } else {
      handleToggleDatePicker();
    }
  };

  const confirmDate = () => {
    setPickupDate(date.toString().substring(0, 15));
    setTrip((state) => {
      return { ...state, date: date.toString().substring(0, 15) };
    });
    handleToggleDatePicker();
  };
  // #endregion

  // #region User Picker
  const [showUsers, setShowUsers] = useState(false);
  const [selectedStaffMembers, setSelectedStaffMembers] = useState<
    StaffMember[]
  >([]);

  useEffect(() => {
    setTrip((state) => ({
      ...state,
      staffMembers: selectedStaffMembers,
    }));
  }, [selectedStaffMembers]);

  const selectStaffMembers = (staffMember: StaffMember) => {
    console.log("Select staff member", staffMember);

    setSelectedStaffMembers((prevState) => {
      const isSelected = prevState.some(
        (member) => member.id === staffMember.id
      );

      if (isSelected) {
        return prevState.filter((member) => member.id !== staffMember.id);
      } else {
        return [...prevState, staffMember];
      }
    });

    setTrip((state) => {
      return { ...state, staffMembers: selectedStaffMembers };
    });

    setShowUsers(false);
  };
  // #endregion

  // #region Add Trip
  const addNewTrip = () => {
    setTrip((state) => ({
      ...state,
      id: Math.floor(Math.random() * 1000),
      staffMembers: selectedStaffMembers,
    }));
  };

  return (
    <View style={styles.container}>
      {trip.id > 0 && <Text>{JSON.stringify(trip)}</Text>}
      <Text>Add Trip</Text>

      <View style={styles.formContainer}>
        {showDatePicker && (
          <>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              display="inline"
              mode={"date"}
              style={styles.dateTimePicker}
              onChange={onDateChange}
            />

            {Platform.OS === "ios" && (
              <View style={styles.dateTimePickerActions}>
                <Button
                  title="Cancel"
                  onPress={() => handleToggleDatePicker()}
                />
                <Button title="Done" onPress={() => confirmDate()} />
              </View>
            )}
          </>
        )}

        {!showDatePicker && (
          <Pressable
            onPress={() => confirmDate()}
            style={styles.textInputPressableWrapper}
          >
            <TextInput
              placeholder="Sat April 10 1999"
              value={pickupDate}
              editable={false}
              style={styles.textInput}
              onPressIn={() => handleToggleDatePicker()}
            />
          </Pressable>
        )}

        <Pressable
          onPress={() => setShowUsers(!showUsers)}
          style={styles.textInputPressableWrapper}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Select Staff Members"
            onPressIn={() => setShowUsers(true)}
            editable={false}
          />
        </Pressable>

        {/* show initals of selected staff members */}
        <View style={styles.selectedStaffMembersContainer}>
          {selectedStaffMembers.map((member) => (
            <Text key={member.id} style={styles.selectedStaffMemberText}>
              {" "}
              {member.firstName}
            </Text>
          ))}
        </View>

        {showUsers && (
          <FlatList
            style={{
              backgroundColor: "rgb(211, 211, 211)",
              elevation: 1,
              zIndex: 22,
              width: "100%",
              marginTop: 60,
              position: "absolute",
            }}
            data={mockStaffMembers}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => selectStaffMembers(item)}>
                <Text style={{ padding: 8 }}>{item.firstName}</Text>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        <TextInput style={styles.textInput} placeholder="Pickup Time" />
        <TextInput style={styles.textInput} placeholder="Area" />
        <TextInput style={styles.textInput} placeholder="Signature" />

        <BaseButton onPress={addNewTrip}>Add Trip</BaseButton>
      </View>
    </View>
  );
};

export default AddNewTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    textAlign: "left",
  },
  textInputPressableWrapper: {
    width: "100%",
  },
  dateTimePicker: {
    backgroundColor: "transparent",
    width: "100%",
    marginTop: -10,
  },
  dateTimePickerActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedStaffMembersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    fontSize: 12,
  },
  selectedStaffMemberText: {
    color: "#000",
    padding: 2,
    borderRadius: 5,
    marginRight: 2,
  },
});
