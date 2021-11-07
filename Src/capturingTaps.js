import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native'

const CapturingTaps = ({ navigation }) => {

    const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAOEEAADhBAEYb4aCAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAi5QTFRF////HiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdHiAdwhLs0wAAALl0Uk5TAAECAwQGBwgJCgsMDQ8RExQVFhcZGhsfICIkJSYnKCssLS4wMjQ2ODk6O0BBQ0RISktOT1BRU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2OkpOam5yho6SlpqeoqquusbKztba4ury9vsDBwsPFxsfIycrNz9DR0tPU19zd3+Dh4uPk5ebn6Onq6+3u8/T19vf4+fv8/f63cACLAAAGC0lEQVR42u3d6ZfWcxzG8W+TMQrZKoTshexLpMIQiSylbEVkScgaIUpIkaRGwljSMBGhbZrvf+dBqVTjnLvDg+7r9foD5sHnfZ0z59zzu39TCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQRI5rf3PFN5s3fb18/tUDXCPO6JU9dY+tSy50kSgXd9T9vHe2q8RonV8PtHOmw4Q48dN6UG+1uU2C4RtqH1YPdJ2A/htrnxb3c5/k/rXOcqDo/rV3pBMl96/1YzeK7l/rJa4U3b9+5EzR/WvPIIdK7l/rOJeK7l/fcKro/rXDraL71/WOFd2/bnWt6P51Z4t7Jfevm9wrun/9ysGi+9cPXSy6f53hZNH961luFt1/vZtF96+eDc7u/4vnQqP716muFt1/TauzJffvHuJsyf23eSY4uv/2K51Nf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/RHf/31119//fXXX3/99ddff/31119//fXXX3/99ddff/311x/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90R/90V9//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fV3tuT+de5IDiMjTm37b/tz2NncMfs8/cN1TWnVP9v6dv3DLRqgf7Z1J+/tP7TbPfJ0Df67f1uHayT6/KjdA1jgFpkW7up/lUukuqyUUlo6HSJVZ/9SSrs75JpUSlnnDLk6ShnqCsF6h5SJrpBscnnHEZK9XT5zhGQry3eOkOzb8ocjJNtiANk2+xWQrbOscoRky8pCR0g2v0xwhGSjy+BeV8i17ehS1jpDrg9KKeOdIdelpZR+X7pDqqWllFKucIhQPWfueijwNafINGv3U8GtPgyKtGjPF0NO2uAaedbu8+WwYV3ukeb9Y/b9cqAFpJnX8s+vB1tAlI5RB7wgwAJyrL32YK8IsYAEPd0rpp3Sx0uChv3Y+M+bcy6HkXOG9P+314QdwgJ2XOftak3EAizAAiyg0QWMcTYLIHkBPdc7mwVgAQQvYKyzWQDRCxjnbBaABRC8gPHOZgFEL+AGZ7MALIDcBey80dksgOgF3ORsFkD0AtqdzQKwAIIXcLOzWQBN47RDWMAtzmYBRC9ggrNZABZA7gJ6b3U2CyB6Abc5mwUQvYCJzmYBWADBC7jd2SyA6AVMcjYLoHkW8FPjC7jD2SwACyB4AXc6mwUQvYDJzmYBRC/gLmfLXkC1gPQF3O1sFoAFELyAe5zNAohewL3OZgFEL2CKs1kA0QuY6mwWQPQC7nO2JnK6BViABVhAg6Y5mwUQvYDpzmYBRC/gfmezAKIX8ICzWQDRC3jQ2SyA6AU85GwWQPQCHnY2C8ACCF7ADGezAKIXMNPZLIDoBTzibBZA8yygu/EFPOpsFkD0AmY5mwUQvYDHnM0CiF7A485mAUQvYLazWQDRC3jC2SyA6AU86WwWQNM44xAW8JSzWQDRC3ja2SyA6AXMcTYLIHoBzzibBWABBC9grrNZANELeNbZLIDoBTznbBZA9AKedzYLIHoB85zNAohewAvOZgFEL+BFZ7MAohfwkrNZABZA8AJedjYLwAIIXsAkZ8tewPYRztZMC9jY8AK6Bjlb9gI8Khy+gN+Pd7XsBXg6IHwBG/s5WvYCznez5jK8wQV4n2j4Apa7WPYCOh0sewG/ulf2Anpb3Ct6AVtcK3sB3ztW9gLWuFX2AhY4VfYCxrhU9AJ2HOtQ0QtY5kzZCxjlStEL8JeA7AX0jnSi6AX4P/PZC1jscaCEBfzQV//VA10nwQkr+vgM8Ei3yXDEqwfJ3zPdYXJctGr//u8Od5Uo13yyY2/9P5dc4CJxBo19fVnnbz9/sfSVy9tcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4//0FVXptNzSido4AAAAASUVORK5CYII=';

    return (
        <View style={Styles.Container}>
            <View style={Styles.Headers}>
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={{ uri: base64Icon }}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                </TouchableOpacity>
                <Text style={Styles.TextStyle}>
                    Capturing Taps
                </Text>
                <View Style={{ width: 50, height: 10, backgroundColor: 'red' }}></View>
            </View>
            <View style={Styles.ViewStyle}>
                <View style={{ margin: 10 }}>
                    <Button style={Styles.ButtonStyle} title="Button 1" onPress={() => alert("hello Button 1")} />
                </View>

                <TouchableOpacity
                    style={Styles.ButtonStyle}
                    onPress={() => alert("hello Button 2")}
                >
                    <Text>Button 2</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const Styles = StyleSheet.create(
    {
        Container: {
            flex: 1
        },
        Headers: {
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
            backgroundColor: '#8a9cb8',
            flexDirection: 'row'
        },
        ViewStyle: {
            flex: 1,
            alignItems: 'center'
        },
        TextStyle: {
            fontSize: 25,
            fontWeight: 'bold'
        },
        ButtonStyle: {
            height: 40,
            width: 250,
            justifyContent: 'center',
            backgroundColor: 'aqua',
            alignItems: 'center',
            borderRadius: 10,
            margin: 10
        },
    }
)

export default CapturingTaps;